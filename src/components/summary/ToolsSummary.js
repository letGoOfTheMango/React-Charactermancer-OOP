import { useSelector } from 'react-redux';

const ToolsSummary = (props) => {
    const tools = Object.entries(useSelector((state) => state.char.tools)).filter(tool => tool[1].potentialToolProficiency === true);
    const list = tools.filter(tool => tool[1].chosen === true).map(tool => tool[1].name).join(", ");
    return (<li>Tools: {list}</li>
    );
};
export default ToolsSummary;