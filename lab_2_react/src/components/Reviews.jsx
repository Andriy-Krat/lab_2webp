import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/16/comments')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Помилка при отриманні відгуків:', error));
  }, []);

  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold mb-4 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-[#7dd3fc] after:mt-2">
        REVIEWS
      </h2>
      <div className="space-y-4">
        {reviews.map(review => (
          <div key={review.id} className="bg-white/5 p-4 rounded-lg border border-white/10">
            <h3 className="font-semibold text-[#7dd3fc]">{review.name}</h3>
            <p className="text-xs text-white/50 mb-2">{review.email}</p>
            <p className="text-sm text-white/85">{review.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;