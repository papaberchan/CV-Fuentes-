import type { LucideIcon } from 'lucide-react'
import { Camera, Code2, Gamepad2, HeartHandshake, Lightbulb, Palette, ShieldCheck, Users } from 'lucide-react'

export const profile = {
  name: 'Sylver Lopez Fuentes',
  displayName: 'Sylver Fuentes',
  headline: 'Aspiring IT Professional & Digital Creative',
  email: 'sylvercool13@gmail.com',
  phone: '09276461910',
  showPhone: true,
  location: 'Panabo City, Davao del Norte, Philippines',
  github: 'https://github.com/papaberchan',
  linkedin: 'https://www.linkedin.com/in/sylver-fuentes-05212343a/',
  facebook: 'https://www.facebook.com/profile.php?id=61592538836645',
  instagram: 'https://www.instagram.com/its.sylver.dawg/',
  tiktok: 'https://www.tiktok.com/@papaberchan',
}

export const roles = ['Aspiring IT Professional', 'BSIT Student', 'Web Development Enthusiast', 'Digital Creative']

export const skillGroups = [
  { name: 'Web & Technology', note: 'Developing skills through study and hands-on learning.', skills: [['HTML', 'Familiar'], ['CSS', 'Familiar'], ['JavaScript', 'Learning'], ['Basic Web Development', 'Applied in Projects'], ['Git & GitHub', 'Applied in Projects'], ['IT Fundamentals', 'Familiar']] },
  { name: 'Digital Creativity', note: 'Creative interests I continue to practice and explore.', skills: [['Video Editing', 'Learning'], ['Photo Editing', 'Learning'], ['Digital Content Creation', 'Exploring'], ['Basic Visual Design', 'Learning'], ['Creative Presentation', 'Applied in Projects'], ['Hands-On Crafting', 'Familiar']] },
  { name: 'Professional Strengths', note: 'How I aim to show up in school, work, and community.', skills: [['Communication', 'Developing'], ['Teamwork', 'Developing'], ['Willingness to Learn', 'Ongoing'], ['Adaptability', 'Developing'], ['Responsibility', 'Ongoing'], ['Community Collaboration', 'Applied']] },
]

export const projects = [
  { title: 'AquaSense Capstone', category: 'Web Development', status: 'Repository available', tech: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/papaberchan/AquaSense-Capstone', description: 'A public repository containing a small, responsive static portfolio template with HTML, CSS, and JavaScript customization guidance.' },
  { title: 'CV Webpage', category: 'Web Development', status: 'Learning project', tech: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/papaberchan/CV-Webpage', description: 'A responsive personal CV and portfolio website built with semantic HTML, modern CSS, and vanilla JavaScript.' },
  { title: 'Sylver Portfolio', category: 'Web Development', status: 'Learning project', tech: ['HTML', 'CSS', 'JavaScript'], url: 'https://github.com/papaberchan/sylver-portfolio', description: 'A small responsive static portfolio project structured around HTML, CSS, JavaScript, and editable profile assets.' },
  { title: 'Git Merge Conflict Activity', category: 'Learning Activity', status: 'Practice activity', tech: ['Git', 'GitHub'], url: 'https://github.com/papaberchan/git-merge-conflict-activity', description: 'A public GitHub repository for a merge-conflict learning activity. Its README does not document further project scope.' },
]

export const interests: { title: string; description: string; icon: LucideIcon; className: string }[] = [
  { title: 'Video & photo editing', description: 'Exploring visual storytelling, composition, and thoughtful edits.', icon: Camera, className: 'wide' },
  { title: 'Gaming', description: 'A space to relax, connect, and enjoy a good challenge.', icon: Gamepad2, className: '' },
  { title: 'Cooking', description: 'Trying recipes and building useful everyday skills.', icon: HeartHandshake, className: '' },
  { title: 'Arts & crafts', description: 'Making flowers and decorative pieces by hand.', icon: Palette, className: 'tall' },
  { title: 'Learning new things', description: 'Staying open to practical skills and new perspectives.', icon: Lightbulb, className: 'wide' },
]

export const experiences = [
  { role: 'Agent', org: 'PLDT', period: 'Employment period to be confirmed', description: 'Developed practical communication, coordination, and professional interaction skills through experience as a PLDT agent. This experience helped build familiarity with workplace responsibilities, responding to concerns, and collaborating with others.', skills: ['Communication', 'Coordination', 'Professional interaction'] },
  { role: 'Purok President', org: 'Local Community / Purok', period: 'Service period to be confirmed', description: 'Participated in community leadership by helping organize and support neighborhood cleanliness and environmental maintenance activities. Worked with community members to encourage cooperation, shared responsibility, and a cleaner living environment.', skills: ['Community collaboration', 'Organization', 'Responsibility'] },
]

export const highlights = [
  { label: 'Student', value: '4th year', icon: Code2 },
  { label: 'Based in', value: 'Panabo City', icon: Users },
  { label: 'Approach', value: 'Keep learning', icon: ShieldCheck },
]
