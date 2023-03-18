import Header from '../shared/header';

export const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export default Layout;
