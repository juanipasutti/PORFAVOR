from flask import Flask, request, send_from_directory, redirect
import smtplib
from email.mime.text import MIMEText
import os

app = Flask(__name__, static_folder=".", static_url_path="/")

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)

@app.route('/enviar', methods=['POST'])
def enviar():
    nombre = request.form.get('nombre')
    email = request.form.get('email')
    mensaje = request.form.get('mensaje')

    msg = MIMEText(f"Nombre: {nombre}\nEmail: {email}\nMensaje:\n{mensaje}")
    msg['Subject'] = 'Nuevo mensaje desde la web'
    msg['From'] = email
    msg['To'] = 'juanignaciopasutti@gmail.com'

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login('juanignaciopasutti@gmail.com', 'bhgghuctccepzgvf')  # ¡REEMPLAZALO por una variable de entorno!
        server.send_message(msg)

    return redirect('/?gracias=true')

if __name__ == '__main__':
    app.run(debug=True)
