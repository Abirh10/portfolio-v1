export type Project = {
  code: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  repo: string;
};

// Pulled from github.com/Abirh10 — edit freely.
export const projects: Project[] = [
  {
    code: "1-1",
    title: "ChessToSoccer",
    tagline: "Cross-domain transfer learning",
    description:
      "Does a Transformer pretrained on chess move sequences transfer usefully to predicting soccer tactical events? Pretrains on chess, then fine-tunes on StatsBomb possession sequences and compares against a random-init baseline.",
    features: [
      "Shared chess/soccer vocabulary with weight tying between embedding and output projection",
      "Possession segmentation using StatsBomb's own ground-truth field",
      "Deterministic 80/10/10 split shared by fine-tuning and evaluation for a clean held-out test set",
      "AMP + gradient accumulation training by default",
    ],
    tech: ["Python", "PyTorch", "Transformers"],
    repo: "https://github.com/Abirh10/football-chess",
  },
  {
    code: "1-2",
    title: "Image Classification",
    tagline: "CNN on Animal Faces (AFHQ)",
    description:
      "A convolutional neural network built with PyTorch to classify cats, dogs, and wildlife from the Animal Faces-HQ dataset, covering preprocessing, training/validation, and inference on new images.",
    features: [
      "Custom CNN architecture for feature extraction and classification",
      "Train/validation/test split with tracked loss and accuracy curves",
      "GPU-accelerated training when available",
      "Predicts on new, unseen images after training",
    ],
    tech: ["Python", "PyTorch", "torchvision"],
    repo: "https://github.com/Abirh10/pytorch-image-classification",
  },
  {
    code: "1-3",
    title: "Text Classification",
    tagline: "Fine-tuned BERT for NLP",
    description:
      "An end-to-end NLP pipeline using Hugging Face Transformers and PyTorch to fine-tune BERT for text classification, from tokenization through evaluation.",
    features: [
      "BERT-based architecture for deep linguistic context",
      "AutoTokenizer for text-to-tensor conversion",
      "Kaggle-integrated dataset ingestion",
      "Real-time training progress via Jupyter widgets",
    ],
    tech: ["Python", "PyTorch", "Hugging Face"],
    repo: "https://github.com/Abirh10/text-classification",
  },
  {
    code: "1-4",
    title: "Audio Classification",
    tagline: "Quran reciter identification",
    description:
      "A deep learning pipeline that classifies Quranic recitation audio by reciter, extracting spectral features with Librosa and training a PyTorch model on GPU.",
    features: [
      "Automated dataset ingestion from Kaggle",
      "Spectral feature extraction with Librosa",
      "Statistical analysis and visualization of class distributions",
      "CUDA-accelerated training",
    ],
    tech: ["Python", "PyTorch", "Librosa"],
    repo: "https://github.com/Abirh10/audio-classification",
  },
  {
    code: "1-5",
    title: "Tabular Classification",
    tagline: "Rice type ID with a PyTorch MLP",
    description:
      "A custom multilayer perceptron classifies rice varieties from morphological measurements like area, perimeter, eccentricity, and aspect ratio.",
    features: [
      "Custom MLP built with torch.nn for tabular feature extraction",
      "Automated data sync from Kaggle via opendatasets",
      "Full cleaning, feature selection, and tensor-conversion pipeline",
      "GPU-accelerated training",
    ],
    tech: ["Python", "PyTorch", "scikit-learn"],
    repo: "https://github.com/Abirh10/tabular-classification",
  },
  {
    code: "1-6",
    title: "Recipe Finder",
    tagline: "Live recipe search, zero frameworks",
    description:
      "A fast recipe search app in vanilla HTML/CSS/JS with no build step — search by meal or ingredient and pull results live from TheMealDB.",
    features: [
      "Search meals by name or keyword, browse as recipe cards",
      "Full recipe detail view: ingredients, instructions, category",
      "YouTube walkthrough links where available",
      "Fully responsive, mobile to desktop",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Abirh10/recipe-finder",
  },
  {
    code: "1-7",
    title: "Weather App",
    tagline: "Instant city weather lookup",
    description:
      "A simple weather app that looks up current conditions by city name using the OpenWeatherMap API, with friendly handling of invalid input.",
    features: [
      "Search current weather by city name",
      "Live temperature and weather icon from OpenWeatherMap",
      "User-friendly handling of empty/invalid input",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Abirh10/Weather-app",
  },
  {
    code: "1-8",
    title: "To-Do List",
    tagline: "Task tracker with live counters",
    description:
      "An interactive to-do list where tasks can be added, edited, completed, and deleted, with live counters tracking completed vs. outstanding work.",
    features: [
      "Add, edit, and delete tasks with confirmation prompts",
      "Checkbox completion with strikethrough styling",
      "Live completed/uncompleted counters after every action",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Abirh10/To-do-list",
  },
];
