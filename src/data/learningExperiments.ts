export interface ExperimentItem {
  id: string;
  method: string;
  hypothesis: string;
  rating: number; // 1 to 5 Stars
  verdict: string;
  dateLogged: string;
}

export const INITIAL_EXPERIMENTS: ExperimentItem[] = [
  {
    id: 'exp_1',
    method: 'Learning Maths at 5:30 AM',
    hypothesis: 'Fresh morning brain retains complex calculus derivatives 2x faster.',
    rating: 5,
    verdict: '⭐⭐⭐⭐⭐ Highly Effective! Solved 10 calculus problems in 45 mins with zero distraction.',
    dateLogged: '2026-08-01'
  },
  {
    id: 'exp_2',
    method: 'Studying immediately after 5km Gym Run',
    hypothesis: 'Post-workout endorphins improve focus on C++ Pointers.',
    rating: 4,
    verdict: '⭐⭐⭐⭐☆ Great energy boost after a quick 15-min shower.',
    dateLogged: '2026-08-01'
  },
  {
    id: 'exp_3',
    method: 'Late Night 2 AM Cramming',
    hypothesis: 'Quiet night hours help finish long YouTube playlists.',
    rating: 2,
    verdict: '⭐⭐☆☆☆ Poor retention. Forgot 60% of concepts by morning. Avoid late night cramming.',
    dateLogged: '2026-07-28'
  }
];
