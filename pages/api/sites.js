import { compareDesc, parseISO } from 'date-fns';
import { getUserSites } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async function handler(req, res) {
  try {
    const token = req.headers.token;
    const { uid } = await auth.verifyIdToken(token);
    const { sites } = await getUserSites(uid);

    sites.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json({ error });
  }
}
