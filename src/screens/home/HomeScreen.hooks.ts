import Icons from '../../utils/icons';
import { HomeScreenProps } from './HomeScreen.types';

const useHomeScreen = (): HomeScreenProps => {
  const categories = [
    {
      id: 1,
      title: 'booking',
      icon: Icons.booking,
      screen: 'Booking',
    },
    {
      id: 2,
      title: 'report',
      icon: Icons.reports,
      screen: 'Reports',
    },
    {
      id: 3,
      title: 'consultations',
      icon: Icons.consultation,
      screen: 'Consultation',
    },
    {
      id: 4,
      title: 'before_visit',
      icon: Icons.before_visit,
      screen: 'BeforeVisit',
    },
    {
      id: 5,
      title: 'child_journey',
      icon: Icons.child_journey,
      screen: 'ChildJourney',
    },
    {
      id: 6,
      title: 'education',
      icon: Icons.education,
      screen: 'Education',
    },
    {
      id: 7,
      title: 'branches',
      icon: Icons.branches,
      screen: 'Branches',
    },
    {
      id: 8,
      title: 'services',
      icon: Icons.services,
      screen: 'Services',
    },
     {
      id: 9,
      title: 'our_team',
      icon: Icons.our_team,
      screen: 'OurTeam',
    },
    {
      id: 10,
      title: 'why_fouady',
      icon: Icons.why_fouady,
      screen: 'WhyFouady',
    },
    {
      id: 11,
      title: 'contact',
      icon: Icons.contact,
      screen: 'Contact',
    },
    {
      id: 12,
      title: 'your_feedback',
      icon: Icons.review,
      screen: 'Feedback',
    },
  ];

  return { categories };
};

export default useHomeScreen;