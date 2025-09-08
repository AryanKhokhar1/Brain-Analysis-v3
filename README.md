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

## 🛠 Tech Stack

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

![Home page](/home/aryan-khokhar/Pictures/Screenshots/Home%20Page.png)
![OCEAN Principle](/home/aryan-khokhar/Pictures/Screenshots/OCEAN%20principle.png)
![Founder](/home/aryan-khokhar/Pictures/Screenshots/Benefits%20and%20Founder.png)
![Contact](/home/aryan-khokhar/Pictures/Screenshots/Contact%20Us.png)
![Result](/home/aryan-khokhar/Pictures/Screenshots/ResultPage.png)
![SignUp](/home/aryan-khokhar/Pictures/Screenshots/Signup.png)
![Login](/home/aryan-khokhar/Pictures/Screenshots/Login.png)






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

The clustering model is trained on synthetic or anonymized personality response data to identify patterns across professions and personal growth metrics.



## Contributing

We welcome PRs and new ideas!

```bash
# Fork the repo and clone
git clone https://github.com/yourusername/BrainAnalysisv3.git
```

Please submit issues, bug reports, or suggestions in the [Issues](https://github.com/yourusername/BrainAnalysisv3/issues) section.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Credits

Developed with ❤️ by [Aryan Khokhar](https://www.linkedin.com/in/aryan-khokhar/)
Inspired by cognitive psychology and powered by modern AI tools.


NeuroPersona – Because understanding your mind is the first step to mastering your future.


