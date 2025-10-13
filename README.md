# Secret App

This is a web application similar to scrt.link, which allows you to simulate generating secure links that can be viewed only once before being automatically destroyed.

## Tech Stack
**Backend**: Django REST Framework, Python 3.11
**Frontend**: Vite 
**Database**: Redis
**Container**: Docker & Docker Compose
**Redis GUI**: RedisInsight

## Prerequisites

Docker
Docker Compose

## Installation & Setup

### Installation & Execution 

1. **Clone the repository**
   ```bash
   git clone https://github.com/CarlsdeLeon/programacion-web.git
   cd secret-app
   git checkout assessment-3
2. **Run the aplication**
   docker compose up --build
3. **Access the services**
   Frontend: http://localhost:5173
   Backend API: http://localhost:8000
   RedisInsight: http://localhost:8001
   
### How to Use

1. **Hide a Secret**
  Go to the "Ocultar" tab
  Enter your secret text in the textbox
  Click "Ocultar" to generate a secure key
  Copy the generated key (it will be automatically deleted after first use)
2. **Reveal a Secret**
  Go to the "Revelar" tab
  Paste the key you received
  Click "Revelar" to view the secret
  The secret will be automatically destroyed after viewing
