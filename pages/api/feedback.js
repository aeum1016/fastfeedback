import { compareDesc, parseISO } from 'date-fns';
import { getUserFeedback } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async function handler(req, res) {
  try {
    const token = req.headers.token;
    const { uid } = await auth.verifyIdToken(token);
    const { feedback } = await getUserFeedback(uid);

    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    res.status(200).json({ feedback });
  } catch (error) {
    res.status(500).json({ error });
  }
}
