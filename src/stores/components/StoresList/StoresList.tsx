import React from "react";

type StoresListState = {};
type StoresListProps = {};

class StoresList extends React.Component<StoresListState, StoresListProps> {
    state: StoresListState = {};

    render() {
        return (
            <div>
                <h1>Store list:</h1>
            </div>
        );
    }
}

export default StoresList;
