export interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
}

export const skills: Skill[] = [
  { name: 'HTML5', level: 95, color: '#E34F26', icon: 'html' },
  { name: 'CSS3', level: 90, color: '#1572B6', icon: 'css' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E', icon: 'js' },
  { name: 'React', level: 80, color: '#61DAFB', icon: 'react' },
  { name: 'Tailwind CSS', level: 88, color: '#38BDF8', icon: 'tailwind' },
  { name: 'C++', level: 70, color: '#00599C', icon: 'cpp' },
  { name: 'Git', level: 75, color: '#F05032', icon: 'git' },
  { name: 'Figma', level: 65, color: '#F24E1E', icon: 'figma' },
];
