# Secret App

This is a web application similar to scrt.link, which allows you to simulate generating secure links that can be viewed only once before being automatically destroyed.

## Tech Stack

**Backend**: Django REST Framework, Python 3.11<br>
**Frontend**: Vite <br>
**Database**: Redis<br>
**Container**: Docker & Docker Compose<br>
**Redis GUI**: RedisInsight<br>

## Prerequisites

Docker<br>
Docker Compose<br>

## Installation & Setup

### Installation & Execution 

1. **Clone the repository**<br>
   ```bash<br>
   git clone https://github.com/CarlsdeLeon/programacion-web.git<br>
   cd secret-app<br>
   git checkout assessment-3<br>
2. **Run the aplication**<br>
   docker compose up --build<br>
3. **Access the services**<br>
    Frontend: http://localhost:5173<br>
    Backend API: http://localhost:8000<br>
    RedisInsight: http://localhost:8001<br>
   
### How to Use

1. **Hide a Secret**<br>
  Go to the "Ocultar" tab<br>
  Enter your secret text in the textbox<br>
  Click "Ocultar" to generate a secure key<br>
  Copy the generated key (it will be automatically deleted after first use)<br>
2. **Reveal a Secret**<br>
  Go to the "Revelar" tab<br>
  Paste the key you received<br>
  Click "Revelar" to view the secret<br>
  The secret will be automatically destroyed after viewing<br>
