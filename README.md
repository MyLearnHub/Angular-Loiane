<div align="center">
  <img height="100px" src="https://iconsverse.vercel.app/icons?i=loiane" alt="Logo da Loiane" />
  <h3 align="center">Angular - Loiane</h3>
</div>

# 🔍Visão Geral
  O curso oferece uma imersão completa no desenvolvimento com Angular, cobrindo desde a introdução à ferramenta até o deploy de aplicações em ambientes de produção. Os tópicos incluem a criação e estruturação de projetos com Angular CLI, uso de data binding, manipulação de diretivas, criação de serviços e pipes, configuração de rotas avançadas e implementação de formulários em modos template-driven e reativo. Também são abordados o consumo de APIs com HttpClient, técnicas de debug, e estratégias de build e deploy utilizando tecnologias como Docker, Firebase, e serviços de nuvem. Ideal para consolidar conhecimentos em Angular e desenvolver aplicações modernas e performáticas.
  <div align="center">
    <h3> 💻Tecnologias Aprendidas</h3>
    <img src="https://iconsverse.vercel.app/icons?i=ts,angular" alt="Tecnologias Aprendidas">
  </div>

# 📚Conteúdo Abordado
  * **Introdução:** 
    - Introdução ao Angular
    - Ambiente de Desenvolvimento (Node.JS, TypeScript, Angular CLI)
    - Hello, World! Criando primeiro projeto e o primeiro Componente
    - Introdução ao TypeScript para Angular
    - Módulos (ngModule)
    - Templates
    - Serviços (Services) e Injeção de dependência (DI)
    - Dicas plugins Angular para Atom e VS Code
  * **Data binding:** 
    - Property Binding e Interpolação
    - Class e Style binding
    - Event binding
    - Two-way data binding
    - Input properties
    - Output properties
    - Ciclo de vida (life-cycle) do Componente
    - Acesso ao DOM e ao Template com ViewChild
  * **Angular CLI:** 
    - Angular CLI: Instalação e criação de projetos: ng new e ng serve
    - Angular CLI: Criando components, services: ng generate
    - Angular CLI: Usando pré-processadores (Sass, Less, Stylus)
    - Angular CLI: ng lint, ng test, ng e2e
    - Angular CLI: Estrutura do projeto
    - Angular CLI: Gerando build de produção
    - Angular CLI: instalando bibliotecas (bootstrap, jquery, materialize, lodash)
  * **Diretivas:**
    - Introdução e tipos de diretivas no Angular
    - Diretivas: ngIf
    - Diretivas: ngSwitch, ngSwitchCase e ngSwitchDefault
    - Diretivas: ngFor
    - Diretivas: sobre o * e template
    - Diretivas: ngClass
    - Diretivas: ngStyle
    - Operador Elvis
    - ng-content
    - Criando uma diretiva de atributo: ElementRef e Renderer
    - Diretivas: HostListener e HostBinding
    - Diretivas: Input e Property Binding
    - Criando uma diretiva de estrutura (ngElse)
  * **Serviços:**
    - Introdução a Serviços
    - Criando um serviço (Service)
    - Injeção de Dependência (DI) + como usar um serviço em um componente
    - Escopo de instâncias de serviços e módulos (singleton e várias instâncias)
    - Comunicação entre componentes usando serviços (broadcast de eventos)
    - Injetando um serviço em outro serviço
  * **Pipes (Filtros):** 
    - Pipes (usando pipes, parâmetros e pipes aninhados)
    - Criando um Pipe
    - Aplicando Locale (internacionalização) nos Pipes
    - Pipes: Criando um Pipe Puro
    - Pipes: Criando um Pipe Impuro
    - Pipes: Async (Assíncrono)
  * **Rotas:**
    - Rotas: Introdução
    - Rotas: Configurando rotas simples
    - Rotas: RouterLink: definindo rotas no template
    - Rotas: Aplicando CSS em rotas ativas
    - Rotas: Definindo e extraindo parâmetros de roteamento
    - Rotas: Escutando mudanças nos parâmetros de roteamento
    - Rotas Imperativas: Redirecionamento via código
    - Rotas: Definindo e extraindo parâmetros de url (query)
    - Rotas: Criando um módulo de rotas
    - Criando um módulo de funcionalidade
    - Rotas: Criando um módulo de rotas de funcionalidade
    - Rotas Filhas
    - Rotas Filhas: desenvolvendo as telas
    - Rotas: Dica de Performance: Carregamento sob demanda (lazy loading)
    - Rotas: Tela de Login e como não mostrar o Menu (NavBar)
    - Usando Guarda de Rotas: CanActivate
    - Usando Guarda de Rotas: CanActivateChild
    - Usando Guarda de Rotas: CanDeactivate
    - Usando Guarda de Rotas: CanDeactivate com Interface Genérica
    - Usando Guarda de Rotas: Resolve: carregando dados antes da rota ser ativada
    - Usando Guarda de Rotas: CanLoad: como não carregar o módulo sem permissão
    - Definindo rota padrão e wildcard (rota não encontrada)
    - Estilo de url: HTML5 ou usando #
  * **Formulários (Template Driven):** 
    - Formulários (template vs data / reativo) Introdução
    - Formulários – Criando o projeto inicial com Bootstrap 3
    - Forms (template driven) Controles ngForm, ngSubmit e ngModel
    - Forms (template driven) Inicializando valores com ngModel (two-way data-binding)
    - Forms (template driven) Módulos e FormsModule
    - Forms (template driven) Aplicando validação nos campos
    - Forms (template driven) Aplicando CSS na validação dos campos
    - Forms (template driven) Mostrando mensagens de erro de validação
    - Forms (template driven) Desabilitando o botão de submit para formulário inválido
    - Forms (Dica): Verificando dados do Form no template com JSON
    - Forms (template driven) Adicionando campos de endereço (form layout Bootstrap 3)
    - Forms (template driven) Refatorando (simplificando) CSS e mensagens de erro
    - Forms (template driven) Form groups (agrupando dados)
    - Forms (template driven) Pesquisando endereço automaticamente com CEP
    - Forms (template driven) Populando campos com setValue e patchValue (autocomplete CEP)
    - Forms (template driven) Submetendo valores com HTTP POST
  * **Formulários Reativos (data-driven):** 
    - Formulários reativos (data driven) Introdução
    - Formulários reativos: Configuração (Módulo e Componente)
    - Formulários reativos: Criando um form com código Angular
    - Formulários reativos: Sincronizando HTML com FormGroup
    - Formulários reativos: Fazendo submit
    - Formulários reativos: Resetando o form
    - Formulários reativos: Aplicando validação nos campos
    - Formulários reativos: Acesso ao FormControl no HTML e CSS de validação dos campos
    - Formulários reativos: Campos de endereço (migrando um form template driven para form reativo)
    - Formulários reativos: Form groups (agrupando dados)
    - Formulários reativos: Autopopulando endereço com CEP (setValue e patchValue)
    - Formulários reativos: Verificar validação dos campos com botão submit
    - Formulários: Criando um serviço de Estados Brasileiros
    - Formulários: Serviço de consulta CEP + provideIn
    - Formulários reativos: Combobox simples (select)
    - Formulários reativos: Combobox com Objeto (ngValue e compareWith)
    - Formulários reativos: Combobox Múltiplo (Select Multiple)
    - Formulários reativos: Radio Button (Botão do tipo Rádio)
    - Formulários reativos: Checkbox Toggle
    - Formulários reativos: FormArray: Checkboxes Dinâmicos
    - Formulários reativos: Validação Customizada (FormArray Checkboxes)
    - Formulários reativos: Validação Customizada (CEP)
    - Formulários reativos: Validação entre dois campos (confirmar email)
    - Formulários reativos: Validação Assíncrona
    - Formulários reativos: Serviço de Mensagens de Erros
    - Formulários reativos: Reagindo à mudanças reativamente
    - Formulários reativos: Campo input customizado (ControlValueAcessor)
    - Formulários reativos: Classe base para Forms (herança no Angular)
    - Formulários reativos: Combobox aninhado: Estado + Cidade
  * **Http:**
    - Http / HttpClient: Introdução
    - Instalando Bootstrap 4
    - Http: Simulando Servidor REST (json-server)
    - Http GET: listar registros
    - Http: Dica: Variável de Ambiente
    - Http GET + Pipe Async
    - Http + RxJS: Unsubscribe Automático
    - Capturando Erros (+ Erro com async)
    - Erro Http: Alerta de Erro com Bootstrap
    - Serviço de alerta genérico com Bootstrap 4
    - Http: Criando formulário para criar e editar cursos
    - HTTP POST Criando Cursos
    - Http: Editando Cursos e Observables aninhados
    - Http: Editando Cursos + Resolver (Rota)
    - Http PUT Atualizando Cursos
    - Http: Popup de Confirmação para remover Cursos
    - Popup de Confirmação genérica Bootstrap 4 (com RxJS)
    - Http: Serviço Genérico de CRUD
    - Upload de Arquivo Formulário Upload com Bootstrap 4
    - Upload de Arquivo: Back-end com Node.js
    - Upload de Arquivo: Request com FormData
    - Http: Removendo CORS com Angular Proxy
    - Upload Arquivo: Barra de Progresso + Observando Eventos Http
    - Criando operador RxJS customizado
    - Download de Arquivo
    - Criando tela de pesquisa
    - Http: Passando Parâmetros na URL (HttpParams)
    - Pesquisa/Busca com Programação Reativa
  * **Depuração / Debug:** 
    - Debug com Augury
    - Debug com Visual Studio Code
  * **Build e Deploy:** 
    - Build de Produção + Suporte ao Internet Explorer
    - Deploy em Produção (Firebase Hosting)
    - Deploy em Produção com ng deploy (Firebase)
    - Gerando Imagem Docker com Build de Produção
    - Imagem Docker: Deploy Google Cloud (Cloud Run)
    - Imagem Docker: Deploy Oracle Cloud
    - Imagem Docker: Deploy Microsoft Azure
    - Imagem Docker: Deploy Amazon AWS
    - Conclusão e próximos passos

# 🏅Certificado
<img src="assets/certificado.jpg" alt="Certificado Front-End em React">

# 🔗Recursos Adicionais
### 🔧Ferramentas
  - <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  - <a href="https://atom-editor.cc/">Atom</a>

### 📦Linguagens e Pacotes
  - <a href="https://www.typescriptlang.org/">TypeScript</a>
  - <a href="https://nodejs.org/en/download/package-manager">Node.Js</a>
  - <a href="https://www.npmjs.com/package/@angular/cli">Angular CLI</a>
  - <a href="https://sass-lang.com/">Sass</a>

### 📖Guias de Referência
  - <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
  - <a href="https://www.typescriptlang.org/docs/">TypeScript</a>
  - <a href="https://angular.dev/overview">Angular</a>
  - <a href="https://nodejs.org/docs/latest/api/">Node.Js</a>
  - <a href="https://sass-lang.com/documentation/">Sass</a>
  
### 📎Curso
  - <a href="https://loiane.training/curso/angular">Angular</a>
  - <a href="https://loiane.training/certificado/tF0Yaq7iB3kmUuh6zs3z">Validação do Certificado</a>

# 📬Contato
<div align="center"> 
  <a href="https://github.com/Paulo-Alvares"><img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white"></a>
  <a href = "mailto:pauloalvares66@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/paulo-alvares/"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
  <a href="https://www.instagram.com/paulo_10111/"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
  <a href="https://www.facebook.com/paulogabriel.alvares"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"></a>
  <a href="https://codepen.io/Poulos-Alvares"><img src="https://img.shields.io/badge/Codepen-000000?style=for-the-badge&logo=codepen&logoColor=white"></a>
</div>