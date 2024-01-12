import React from "react";
import TemplateView from "./TemplateView";

const TemplateViewController = () => {

    const [numberTab, setNumberTab] = React.useState(1);
    const [openCollapse, setOpenCollapse] = React.useState(false);

    const changeTab = (numberSelection: number) => {
        setNumberTab(numberSelection);
    }

    return <TemplateView
        changeTab={changeTab}
        numberTab={numberTab}
        setOpenCollapse={setOpenCollapse}
        openCollapse={openCollapse}
    />
}

export default TemplateViewController;