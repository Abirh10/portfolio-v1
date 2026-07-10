export type SkillCategory = {
  name: string;
  items: string[];
};

// Merged from resume (Skills section) + the tech actually used across
// lib/data/projects.ts. Edit freely.
export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: ["Python", "JavaScript", "HTML", "CSS", "C", "Bash", "SQL", "Java"],
  },
  {
    name: "ML / AI Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Transformers",
      "BERT",
      "Hugging Face",
      "Scikit-learn",
    ],
  },
  {
    name: "Libraries & Tools",
    items: [
      "OpenCV",
      "NumPy",
      "Librosa",
      "torchvision",
      "PySide6",
      "PyQt6",
      "Flask",
      "Jupyter Notebook",
    ],
  },
  {
    name: "Platforms & Systems",
    items: ["Git", "Unix/Linux", "CUDA", "Raspberry Pi", "Arduino"],
  },
  {
    name: "Design",
    items: ["Fusion 360", "Figma", "Photoshop", "Microsoft 365", "Canva"],
  },
];
