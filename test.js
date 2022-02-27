//! Verifier si un nombre est égal à 1,11,21,31,41,51... Donc de la forme n+1 avec n un multiple de 10

for (let i = 0; i < 102; i++)
if ((i-1)%10 === 0) {
    console.log('n+1 ===> ', i);
}

//! Verifier si un nombre est égal à 10,110,210,310... Donc de la forme n+10 avec n un multiple de 100

for (let i = 0; i < 220; i++)
if ((i-10)%100 === 0) {
    console.log('n+10 === ', i);
}

//! Verifier si un nombre est égal à 10,110,210,310... Donc de la forme n+10 avec n un multiple de 100

for (let i = 0; i < 220; i++)
if ((i-10)%100 === 0) {
    console.log('i === ', i);
}