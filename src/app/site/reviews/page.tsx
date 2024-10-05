import Nav from "@/app/components/Nav";

import { StarIcon } from "@radix-ui/react-icons";

interface Review {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
}

const REVIEWS: Review[] = [
  {
    name: "Roommate #1",
    rating: 4,
    review:
      "Nice, genuine guy. Comes with \"slient\" vibrating alarm which buzzes like a jackhammer. Increases tips for any job significantly with his attractive eyes and hair which should never be buzzed. Profitable jokes are a hit or miss, depends on the day. Expect myriads of anime stickers since he absolutely adores anime more than anyone else. Can carry about 20 chairs at church. Surprisingly came with over-sized, hungry snake and hairy frozen rats. Wasn't so sure at first, but he's a keeper hands down. Highly recommend to those who like surprises."
  },
  {
    name: "Anonymous customer",
    rating: 5,
    review:
    "If you are hungry and looking for some chips, you only need to look for one... I was walking around Target at UTC looking for a snack, and I found exactly what I was looking for. Standing there -no actually, hand standing there- was the biggest Dorito I have ever seen."
  },
  {
    name: "Roommate number 1",
    rating: 5,
    review:
    "I love my Jeremiah ! has an alarm that wakes and shakes the entire room so we all have a productive day together. He always takes care of his spaces and is always happy. Only downside is he sheds a lot and he has a good sleep schedule."
  },
  {
    name: "anonymous visitor",
    rating: 2,
    review:
    "WHY IS THERE A SNAKE IN THE -",
  },
  {
    name: "Daniel",
    rating: 4,
    review: "doesn't watch as much anime or play as much video games as I thought...",
  },
  {
    name: "Anonymous",
    rating: 4,
    review: "He is the reason why I go to AACF after events"
  },
  {
    name: "anonymous",
    rating: 3,
    review: "I kept trying to get my Jeremiah to stop going to the gym but it doesn't listen. Anyone know how to fix this?"
  },
  {
    name: "Aden Hong",
    rating: 5,
    review: "The whole package"
  },
  {
    name: "Aden Hong",
    rating: 5,
    review: "The whole package"
  },
  {
    name: "Noya",
    rating: 5,
    review: "In the verdant realm or yhore, there dwelt a noble Asian man, blessed with a crown of curly hair that framed his striking visage. A stalwart companion of unwavering loyalty, his handsome and muscular form was a testament to his valorous spirit. A faithful friend, he uplifted the hearts of many with his steadfast Christian faith, encouraging all who crossed his path. Truly, he is a cherished soul, a beacon of hope and camaraderie amidst the trials of life."
  },
  {
    name: "Berean Community Church",
    rating: 5,
    review: "A good member ig"
  },
  {
    name: "Airbnb Owner",
    rating: 1,
    review: "Slept at my house, and played with my dog. He was a good customer and household sharer, didn't disturb me in my slumber. Solid person and faithful servant of the Lord. Was awfully reading a lot and antisocial."
  }
];

export default function Page() {

  const sortedReviews: Review[] = REVIEWS.sort((a, b) => 0.5 - Math.random())

  return (
    <div>
      <Nav />
      <div className="flex justify-center mt-[100px]">
        <div>
          <h1 className="text-4xl font-bold mb-3">Reviews</h1>
          <p className="mb-[30px]">
            See what Jeremiah users have to say about our products.
          </p>

          <div className="flex flex-col gap-4 mb-[200px]">
            {sortedReviews.map((review, key) => {
              return (
                <div key={key} className="hover:bg-gray-100 rounded-xl p-[30px] duration-200">
                  <div className="flex justify-between mb-2">
                    <h2 className="font-medium text-xl">{review.name}</h2>
                    <div className="flex ">
                      {Array.from(Array(review.rating).keys()).map(
                        (starId) => (
                          <StarIcon key={starId} className="w-6 h-6 text-yellow-500" />
                        )
                      )}
                    </div>
                  </div>
                  <p className="max-w-[450px]">{review.review}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
