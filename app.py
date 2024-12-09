# Importando o Flask e componentes importantes para o código
from flask import Flask, render_template, request, jsonify, send_from_directory

# Instanciando o WebService
app = Flask(__name__)

# Criando a rota para a tela inicial INDEX.html
@app.route('/')
def telainicial(): 
    return render_template("index.html")  

# Criando a rota para a tela inicial do to-do
@app.route('/to-do')
def todolist(): 
    return render_template("to-do.html")  

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
