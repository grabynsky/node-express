import { IToken, ITokenModel } from "../interfaces/token.interface";
import { Token } from "../modules/token.module";

class TokenRepository {
    public createTokens(dto: ITokenModel): Promise<IToken> {
        return Token.create(dto);
    }

    public findByParams(params: Partial<IToken>): Promise<IToken> {
        return Token.findOne(params);
    }
}

export const tokenRepository = new TokenRepository();
