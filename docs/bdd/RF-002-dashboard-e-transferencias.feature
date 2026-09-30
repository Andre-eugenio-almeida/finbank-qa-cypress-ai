# language: pt

Funcionalidade: Dashboard e transferências

  Como usuário autenticado do FinBank
  Quero acessar meu dashboard e realizar transferências
  Para movimentar meu saldo com segurança

  Contexto:
    Dado que o usuário está autenticado
    E possui saldo disponível de R$ 1.000,00

  Cenário: Acessar dashboard após login válido
    Quando o usuário realizar o login com credenciais válidas
    Então o sistema deve direcionar o usuário para o dashboard

  Cenário: Realizar logout
    Dado que o usuário está no dashboard
    Quando o usuário realizar o logout
    Então o sistema deve encerrar a sessão
    E direcionar o usuário para a tela de login

  Cenário: Impedir acesso ao dashboard sem autenticação
    Dado que o usuário não está autenticado
    Quando tentar acessar diretamente o dashboard
    Então o sistema deve direcionar o usuário para a tela de login

  Cenário: Exibir nome do usuário autenticado
    Quando o usuário acessar o dashboard
    Então o sistema deve exibir o nome do usuário autenticado

  Cenário: Realizar transferência com sucesso
    Quando o usuário informar um CPF de destinatário válido
    E informar um valor de transferência válido
    E confirmar a transferência
    Então o sistema deve informar que a transferência foi realizada com sucesso

  Cenário: Impedir transferência sem CPF do destinatário
    Quando o usuário não informar o CPF do destinatário
    E informar um valor de transferência válido
    E confirmar a transferência
    Então o sistema deve informar que o CPF do destinatário é obrigatório

  Cenário: Impedir transferência sem valor
    Quando o usuário informar um CPF de destinatário válido
    E não informar o valor da transferência
    E confirmar a transferência
    Então o sistema deve informar que o valor informado é inválido

  Cenário: Impedir transferência com valor zero
    Quando o usuário informar um CPF de destinatário válido
    E informar o valor de R$ 0,00
    E confirmar a transferência
    Então o sistema deve informar que o valor informado é inválido

  Cenário: Impedir transferência com valor negativo
    Quando o usuário informar um CPF de destinatário válido
    E informar um valor negativo
    E confirmar a transferência
    Então o sistema deve informar que o valor informado é inválido

  Cenário: Exibir saldo disponível
    Quando o usuário acessar o dashboard
    Então o sistema deve exibir o saldo disponível de R$ 1.000,00

  Cenário: Realizar transferência dentro do saldo disponível
    Quando o usuário informar um CPF de destinatário válido
    E informar uma transferência de R$ 500,00
    E confirmar a transferência
    Então o sistema deve informar que a transferência foi realizada com sucesso
    E o saldo disponível deve ser R$ 500,00

  Cenário: Impedir transferência acima do saldo disponível
    Quando o usuário informar um CPF de destinatário válido
    E informar uma transferência de R$ 1.500,00
    E confirmar a transferência
    Então o sistema deve informar "Saldo insuficiente"
    E o saldo disponível deve permanecer em R$ 1.000,00

  Cenário: Atualizar saldo após múltiplas transferências
    Quando o usuário realizar uma transferência de R$ 300,00
    E realizar uma segunda transferência de R$ 200,00
    Então o saldo disponível após a primeira transferência deve ser R$ 700,00
    E o saldo disponível após a segunda transferência deve ser R$ 500,00