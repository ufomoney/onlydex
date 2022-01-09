import { ChainId, Token } from '@ufomoney/newsdk';

type Props = {
    lpAddress: string,
    token0: Token,
    token1: Token,
};

export default function useTLP({ lpAddress, token0, token1 }: Props) {
    return new Token(
        ChainId.AURORA,
        lpAddress,
        18,
        'TLP',
        `TLP ${token0?.symbol}-${token1?.symbol}`,
    );
}