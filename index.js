(function () {

    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [10, 11, 12, 13, 14];

    arr1.splice.apply(arr1, [3, 2].concat(arr2));
    console.log(arr1);

    const blocks = document.getElementsByClassName('block');
    const aBlocks = Array.prototype.slice.apply(blocks, [2, 5]);

    class Person {
        firstName = '';
        lastName = '';

        constructor(f, l) {
            this.firstName = f;
            this.lastName = l;
        }

        name() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    class Wife extends Person {
        constructor(f, l, husband) {
            super(f, l);
            this.spouseName = husband.name.bind(husband);
        }
    }

    const h = new Person('William', 'King');
    const w = new Wife('Ada', 'Lovelace', h);

    function add(a, b) {
        return a + b;
    }

    function doAlotOfWork() {
        return 10;
    }

    const addWork = add.bind(null, doAlotOfWork());
})();