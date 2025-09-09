#  NeuroPersona (BrainAnalysisv3)

**NeuroPersona**, formerly known as **BrainAnalysisv3**, is an AI-powered web application that analyzes a user's personality using the **Big Five Personality Traits** (OCEAN model). Based on your answers to psychological questions, it gives you a breakdown of your behavioral traits and recommends ideal career paths and areas of improvement using **K-Means clustering**.

## Features

- Personality analysis based on the OCEAN model:
  - Openness
  - Conscientiousness
  - Extraversion
  - Agreeableness
  - Neuroticism
- Visual representation of 30 subtraits via interactive bar charts
- Career recommendation using K-Means clustering
- Built with **React.js (Vite)** frontend and **Django (REST API)** backend
- Secure architecture with API integration
- Fast and responsive UI

## Tech Stack

**Frontend**:
- React.js (Vite)
- TailwindCSS
- Recharts (for charts)
- Axios

**Backend**:
- Django
- Django REST Framework
- Scikit-learn (KMeans clustering)
- SQLite (or your choice of DB)

## Project Overview

<img width="1839" height="960" alt="Home Page" src="https://github.com/user-attachments/assets/c686b741-a75d-4010-9458-f60cbf7adf3e" />
<img width="1839" height="960" alt="OCEAN Principle" src="https://github.com/user-attachments/assets/22599184-1523-48bf-a7ea-06e3887e4411" />
<img width="1839" height="960" alt="Benefits and Founder" src="https://github.com/user-attachments/assets/cbdeaf6e-4d15-44bc-b12a-05f3b3ea34ed" />
<img width="1839" height="960" alt="Contact us" src="https://github.com/user-attachments/assets/229a6fda-763b-41eb-bc5b-c2e5908734bf" />
<img width="1839" height="960" alt="ResultPage" src="https://github.com/user-attachments/assets/3901fa5f-de56-4a5a-af53-1e53e75b4b23" />
<img width="1839" height="960" alt="Signup" src="https://github.com/user-attachments/assets/ce89077c-0ac7-4893-bac8-fdbc57940d2f" />
<img width="1839" height="960" alt="Login" src="https://github.com/user-attachments/assets/002880a9-3489-40c9-9369-198df494b955" />
<img width="1423" height="671" alt="Screenshot from 2025-09-08 14-53-29" src="https://github.com/user-attachments/assets/2b9c72d3-fb18-4789-a7a1-126a75479976" />

## Installation & Setup

### Prerequisites

- Python 3.10+
- Node.js + npm/yarn
- Virtualenv (recommended)


### Backend Setup (Django)

```bash
cd backend
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```



## Frontend Setup (React)

```bash
cd frontend
npm install
npm run dev
```

## Personality Model

We use the scientifically validated **Big Five** personality model (OCEAN) to split traits into 30 subdimensions. Then we analyze responses, normalize them, and apply **KMeans clustering** to:

* Match users with career domains
* Suggest behavioral growth paths

## Dataset

The clustering model is trained on synthetic or anonymized personality response data to identify patterns across professions and personal growth metrics. Here is the page from where data [Dataset](https://www.kaggle.com/datasets/utkarshshrivastav07/career-prediction-dataset/data) has been used.



## Contributing

We welcome PRs and new ideas!

```bash
# Fork the repo and clone
git clone https://github.com/yourusername/BrainAnalysisv3.git
```

Please submit issues, bug reports, or suggestions in the [Issues](https://github.com/AryanKhokhar1/Brain-Analysis-v3/issues) section.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Credits

Developed with ❤️ by [Aryan Khokhar](https://www.linkedin.com/in/aryan-khokhar/)
Inspired by cognitive psychology and powered by modern AI tools.


NeuroPersona – Because understanding your mind is the first step to mastering your future.


