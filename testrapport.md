# Testrapport

Modulen har testats genom automatiserade enhetstester skrivna med ramverket Jest.

## Summering av test

Något som är viktigt att veta är att det finns en större brist i testningen av modulen, och det är att enhetstesterna testar klasserna som innehåller den stora majoriteten av logiken bakom modulen, men de testar inte de faktiska publika metoderna. De publika metoderna tillhandahåller strängar till de bakomliggande klasserna genom att läsa från input-stream, testerna tillhandahåller dessa strängar direkt till klasserna istället.

Även om detta inte är ett 100% korrekt test av "real world"-situationer så anser jag det bra nog inom ramen för kursen. Jag försökte under en lång tid få till möjligheten att "mocka" input, men lyckades inte få det att fungera. I en skarp situation med en riktig, kommersiell, produkt hade jag självklart inte nöjt mig med detta.

Jag anser ändå att nedanstående tester ger mer värde än manuella tester hade gett, då det hade inneburit mycket färre tester som tagit mycket längre tid att genomföra.

## Utfall

Tester körda 2022-09-19 kl. 15:33.

![Testrapport](./img/testrapport_2022-09-19_15-33.png)