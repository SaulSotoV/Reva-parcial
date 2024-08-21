import styledComponents from "styled-components";

export const PrimaryButton = styledComponents.button`
    font-size : 0.5rem;
    color : ${({ theme }) => theme.colors.primary};

    &:hover{
        color : ${({ theme }) => theme.colors.seconary};
    }
    
`

export const SecondaryButton = styledComponents(PrimaryButton)`
    color : ${({ theme }) => theme.colors.primary};
    &:hover{
        color : ${({ theme }) => theme.colors.seconary};
    }
    
`