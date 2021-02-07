import firebase from "./firebase";

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection("users")
    .doc(uid)
    .set(
      {
        uid,
        ...data,
      },
      { merge: true }
    );
}

export async function getFirestoreUser(uid) {
  const doc = await firestore.collection("users").doc(uid).get();
  return doc.data();
}

export async function createPoll({
  uid,
  pollName,
  status,
  createdAt,
  participants,
}) {
  const participantIds = await addParticipants(participants);
  const poll = await firestore.collection("polls").add({
    authorId: uid,
    pollName,
    status,
    createdAt,
    participantIds,
  });
  await firestore
    .collection("users")
    .doc(uid)
    .update({
      pollIds: firebase.firestore.FieldValue.arrayUnion(poll.id),
    });
  return poll.id;
}

async function addParticipants(participants) {
  let participantIds = [];
  for (let index = 0; index < participants.length; index++) {
    const { name, description } = participants[index];
    const doc = await firestore.collection("participants").add({
      name,
      description,
      count: 0,
    });
    participantIds.push(doc.id);
  }
  return participantIds;
}

export async function deletePoll(id) {
  const poll = await firestore.collection("polls").doc(id).get();
  const authorId = poll.data().authorId;
  const participantIds = poll.data().participantIds;
  firestore.collection("polls").doc(id).delete();

  participantIds.forEach((participantId) => {
    firestore.collection("participants").doc(participantId).delete();
  });

  firestore
    .collection("users")
    .doc(authorId)
    .update({
      pollIds: firebase.firestore.FieldValue.arrayRemove(id),
    });
}

export async function getData(pollId) {
  const poll = await firestore.collection("polls").doc(pollId).get();
  const pollData = poll.data();
  const participantIds = pollData.participantIds;
  let participants = [];

  for (let index = 0; index < participantIds.length; index++) {
    const participant = await firestore
      .collection("participants")
      .doc(participantIds[index])
      .get();
    const participantData = participant.data();
    participants.push({
      ...participantData,
      id: participant.id,
    });
  }
  return {
    authorId: pollData.authorId,
    createdAt: pollData.createdAt,
    pollName: pollData.pollName,
    status: pollData.status,
    participants: participants,
    pollId: poll.id,
  };
}

export async function updatePoll(id, poll) {
  await firestore.collection("polls").doc(id).update({
    pollName: poll,
  });
}
