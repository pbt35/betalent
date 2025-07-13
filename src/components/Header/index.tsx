import Logo from '../Logo';
import { WrapperLogo, StyledHeader } from './styles';

export const Header = () => {
    return (
        <StyledHeader>
            <WrapperLogo>
                <Logo />
            </WrapperLogo>
        </StyledHeader>
    )
}

export default Header;