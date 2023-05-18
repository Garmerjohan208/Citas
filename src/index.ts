import createserver from './web';

createserver().listen(3000, () => {
    console.log(':3')
});
