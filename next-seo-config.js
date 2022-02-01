const description =
  'A platform that enables students to track homework, activities, etc. together with their friends or classmates. With this platform, you can create rooms, invite your friends, and track tasks collaboratively!';

const imgUrl =
  'https://firebasestorage.googleapis.com/v0/b/trackas1.appspot.com/o/seo%2FtrackAsOne.jpg?alt=media&token=df1d098a-a581-4670-96c3-f1c85f128947';

export default {
  title: 'trackAsOne | Task Tracker',
  description,
  openGraph: {
    type: 'website',
    url: 'https://trackasone.me',
    title: 'trackAsOne | Task Tracker',
    description,
    images: [
      {
        url: imgUrl,
        width: 800,
        height: 600,
        alt: 'trackAsOne',
        type: 'image/jpeg',
      },
      {
        url: imgUrl,
        width: 900,
        height: 800,
        alt: 'trackAsOne Alt',
        type: 'image/jpeg',
      },
      {
        url: imgUrl,
      },
    ],
    site_name: 'trackAsOne',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
};
