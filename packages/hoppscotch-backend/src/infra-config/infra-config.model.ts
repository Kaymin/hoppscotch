import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { AuthProvider } from 'src/auth/helper';
import { InfraConfigEnumForClient } from 'src/types/InfraConfig';
import { AuthProviderStatus } from './helper';

@ObjectType()
export class InfraConfig {
  @Field({
    description: 'Infra Config Name',
  })
  name: InfraConfigEnumForClient;

  @Field({
    description: 'Infra Config Value',
  })
  value: string;
}

registerEnumType(InfraConfigEnumForClient, {
  name: 'InfraConfigEnum',
});

registerEnumType(AuthProvider, {
  name: 'AuthProvider',
});

registerEnumType(AuthProviderStatus, {
  name: 'AuthProviderStatus',
});
