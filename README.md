# Orange Portfólio

Projeto desenvolvido para o hackathon do programa de formação {AI V.5.0} do grupo Fcamara e OrangeJuice

## Índice

- [Sobre](#sobre)
- [Recursos](#recursos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre

O Orange Portfólio é uma aplicação web para hospedagem de projetos e portfólios. Visa atender a profissionais voltados para área de desenvolvimento e diversas áreas, permitindo a exibição de seus trabalhos e a descoberta de outros projetos.

## Recursos

- Registro de usuários novos
- Login de usuários existentes
- Perfil do usuário
- Explorar projetos

# Acesso ao Site

O site está disponível online. Você pode acessá-lo através do seguinte URL:

[Orange Portfólio](https://)

## Tecnologias Utilizadas

# Este projeto utiliza as seguintes tecnologias:

- Linguagem de Programação: [Python][JavaScript] [HTML] [CSS]
- Framework: [Django][Django REST Framework][REACT.JS][django-allauth]
- Biblioteca: [boto3][drf_yasg][django.contrib.auth][rest_framework_simplejwt][django.core.validators][rest_framework.serializers]
- Banco de Dados: [MySQL]
- Outras Ferramentas:

# # Instalando Frameworks e bibliotecas

1. Instale o Python através do [python.org]
2. Abra o terminal do Windows
3. Execute o comando `pip install` seguido do nome da biblioteca
4. Caso não funcione, garanta a instalação do pip usando: `python -m ensurepip --default-pip`

### DJANGO:
- Django:
  `pip install django`

- Django REST Framework:
  `pip install djangorestframework`

- django-allauth:
  `pip install django-allauth`

### Autenticação e Autorização:
- rest_framework_simplejwt:
  `pip install djangorestframework-simplejwt`

### AWS:
- boto3:
  `pip install boto3`
  Documentação:
  
- drf_yasg:
  `pip install drf-yasg`

### Outros:
- google-auth:
  `pip install google-auth`

## Como Rodar os Testes

Para garantir a integridade e a funcionalidade do projeto, são fornecidos testes automatizados. Siga as instruções abaixo para executar os testes.

Requisitos:
Certifique-se de ter todas as dependências instaladas.

# Execute todos os testes
`python manage.py test`

# Principais Problemas Enfrentados

Nesta seção, destacamos alguns dos desafios que enfrentamos durante o desenvolvimento do projeto. Estes são pontos que requerem atenção e esforços adicionais para melhorar a qualidade e a eficiência do projeto.

1. **Problema 1: Integração das bibliotecas drf-social-oauth2**
   - *Contexto*: Primeiramente, tentamos implementar a autenticação via Google pela biblioteca [drf-social-oauth2].
   - *Impacto*: Perdemos alguns dias até que a parte do back-end de Login e Registro estivesse totalmente finalizada.
   - *Possíveis Soluções*: Migramos para a biblioteca [django-allauth].

2. **Problema 2: Obtenção do token de acesso ao logar via Google ou GitHub com a biblioteca**
   - *Contexto*: Usando a biblioteca django-allauth, não conseguimos obter o token de acesso.
   - *Impacto*: Isso atrapalhou a integração entre front-end e back-end.
   - *Possíveis Soluções*: Consideramos usar a URL de login já existente e, ao clicar no botão do Google, direcionar para autenticação com o allauth. Isso pode comprometer algumas funcionalidades do aplicativo, mas para fins demonstrativos, servirá.

# Próximos Passos

Visto que este é um projeto relativamente curto, pensamos em algumas possíveis implementações para o futuro.

 **Melhoria 1: Gerar dashboards de tecnologias utilizadas e de busca por tags específicas**
   - *Contexto*: Por se tratar de uma plataforma que pode promover contratações, podemos explorar melhor algumas funcionalidades.
   - *Objetivo*: Acompanhar as tendências de mercado e atualizar profissionais e recrutadores para um melhor desenvolvimento profissional.
   - *Plano de Ação*: Implementar um banco de dados de registros de pesquisas, executar consultas SQL, gerar dashboards para usuários acompanharem.

 **Melhoria 2: Ampliar formatos de arquivos que podem ser feitos uploads**
   - *Contexto*: Em uma época de crescimento do mercado de TI, diferentes desenvolvedores podem usar formatos de arquivos diversos.
   - *Objetivo*: Ampliar o leque de opções para formatos de arquivos.
   - *Plano de Ação*: Preparação de um banco de dados não relacional, implementações de front-end e back-end.

**Melhoria 3: Integração com IA**
   - *Contexto*: Em uma época de grande volume de dados e bibliotecas de Machine Learning, podemos integrar nosso site para otimizações.
   - *Objetivo*: Integração com IA para recomendações de profissionais para os recrutadores aproveitarem melhor a plataforma, oferecendo recomendações para usuários cruzando dados como: perfil profissional, experiências, tendências.
   - *Plano de Ação*: Primeiro ter um banco de dados bem estruturado, utilizar APIs que possam ser integradas. Fazer por meio da tecnologia mais adequada (Linear regression, SVM, DecisionTree ou até Deep Learning).

# Contribuições

Se você estiver interessado em abordar algum dos problemas mencionados ou contribuir com ideias para os próximos passos, incentivamos ativamente sua participação. Sinta-se à vontade para criar uma issue ou enviar uma pull request.

# Agradecimentos

A SQUAD-2, com os integrantes (por ordem alfabética): Felipe Siqueira, Iago Santos, Ian Périgo e Thaís Siqueira, agradecem a toda equipe do OrangeJuice e Fcamara que disponibilizaram profissionais gabaritados e muito gentis para nos acompanhar nesse processo. Ao nosso Padrinho Lucas Moreira sempre solícito e objetivo, à Fabiana Martins por desenvolver um protótipo lindo e bem organizado, e à Mariana Medanha do marketing que nos envolveu nessa hackathon como se fossemos participantes de uma jornada épica. "Toda grande caminhada começa com um simples passo" (Buda).





