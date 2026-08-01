export interface BrainDumpItem {
  id: string;
  timestamp: string;
  category: 'Idea' | 'Doubt' | 'Goal' | 'Book/Link' | 'Random';
  text: string;
}

export interface FailureLogItem {
  id: string;
  timestamp: string;
  topic: string;
  reason: string;
  actionPlan: string;
  resolved: boolean;
}

export interface HealthTarget {
  id: string;
  title: string;
  target: string;
  current: string;
  unit: string;
  category: 'Physical' | 'Mental' | 'Routine';
}

export const INITIAL_HEALTH_TARGETS: HealthTarget[] = [
  { id: 'h_sleep', title: 'Night Sleep', target: '7.5', current: '7.0', unit: 'Hours', category: 'Physical' },
  { id: 'h_water', title: 'Water Intake', target: '3.5', current: '2.5', unit: 'Liters', category: 'Physical' },
  { id: 'h_run', title: 'Running / Walking', target: '3.0', current: '2.0', unit: 'km', category: 'Physical' },
  { id: 'h_meditate', title: 'Mindfulness Meditation', target: '10', current: '10', unit: 'Mins', category: 'Mental' },
  { id: 'h_focus', title: 'Deep Focus Study', target: '5.0', current: '3.5', unit: 'Hours', category: 'Routine' }
];
