import { useState } from "react";
import Auctions_clients from "../Auctions_clients/Auctions_clients";
import Clients_table from "../Clients_table/Clients_table";

function  AuctionClientMannager() {

    const [showClient, setShowClient] = useState()
    return ( 
        <>
            <Auctions_clients/>
            <Clients_table/>
        </>
    );
}

export default AuctionClientMannager ;