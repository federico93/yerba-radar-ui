import React from "react";
import StoresList from "../../components/StoresList";

type StoresListPageState = {};
type StoresListPageProps = {};

class StoresListPage extends React.Component<StoresListPageState, StoresListPageProps> {
    state: StoresListPageState = {};

    render() {
        return (
            <StoresList/>
        );
    }
}

export default StoresListPage;
