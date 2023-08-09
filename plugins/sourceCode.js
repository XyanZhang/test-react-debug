console.log(1);

function debugFunc() {
    console.info(2);
}

export default class DebugClazz {
    fn() {
        console.debug(3);
    }
    render() {
        return <div>{console.error(4)}</div>
    }
}