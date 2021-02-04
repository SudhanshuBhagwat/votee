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

// {POLL} ID - Name, Participant List

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

// {PARTICIPANT} ID - Name, Description, Poll Count

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
