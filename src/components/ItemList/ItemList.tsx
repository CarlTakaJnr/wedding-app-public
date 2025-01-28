import React, { ReactNode } from "react";
import "./ItemList.css";

interface ItemListProps {
	title?: string;
	children: ReactNode;
}

const ItemList: React.FC<ItemListProps> = ({ title, children }) => (
	<div className="itemListcontainer">
		{title && <h2>{title}</h2>}
		{title && <h5>________________________________</h5>}
		<div className="itemContent">{children}</div>
	</div>
);

export default ItemList;
