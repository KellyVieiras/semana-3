// ATIVIDADE 1 - Farmácia JS está em promoção. 
// A cada 2 produtos iguais comprados, receba 5 reais de desconto.

let  produto1  =  Número  ( prompt ( "Insira o valor do primeiro produto:" ) ) ;
    alert  ( "AVISO: Caro cliente, caso leve outro produto igual a este \ não terá R$ 5,00 de desconto." )

let  produto2  =  Número  ( prompt ( "Insira o valor do segundo produto:" ) ) ;
deixe  desconto  =  5

soma  =  produto1  +  produto2

if  ( produto1  ==  produto2 ) {
alert  ( "Parabéns você ganhou R $ 5,00 de desconto. \ n \ nValor à Pagar: R $"  +  ( soma  -  desconto ) )
}  else {
    alerta  ( "Valor à pagar: R $"  +  soma )
}
