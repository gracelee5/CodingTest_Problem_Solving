function solution(files) {
    const parsed = files.map((file, index) => {
        let i = 0;
        const len = file.length;

        // HEAD
        while (i < len && !(file[i] >= '0' && file[i] <= '9')) {
            i++;
        }
        const head = file.slice(0, i);

        // NUMBER
        let numStart = i;
        let count = 0;
        while (i < len && (file[i] >= '0' && file[i] <= '9') && count < 5) {
            i++;
            count++;
        }
        const number = file.slice(numStart, i);

        return {
            original: file,
            head: head.toLowerCase(),
            number: parseInt(number),
            index: index
        };
    });

    parsed.sort((a, b) => {
        if (a.head !== b.head) {
            return a.head.localeCompare(b.head);
        }
        if (a.number !== b.number) {
            return a.number - b.number;
        }
        return a.index - b.index;
    });

    return parsed.map(v => v.original);
}