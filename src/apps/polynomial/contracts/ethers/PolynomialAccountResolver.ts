/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace AccountResolver {
  export type AuthTypeStruct = {
    owner: PromiseOrValue<string>;
    authType: PromiseOrValue<BigNumberish>;
  };

  export type AuthTypeStructOutput = [string, BigNumber] & {
    owner: string;
    authType: BigNumber;
  };

  export type AccountDataStruct = {
    ID: PromiseOrValue<BigNumberish>;
    account: PromiseOrValue<string>;
    version: PromiseOrValue<BigNumberish>;
    authorities: PromiseOrValue<string>[];
  };

  export type AccountDataStructOutput = [BigNumber, string, BigNumber, string[]] & {
    ID: BigNumber;
    account: string;
    version: BigNumber;
    authorities: string[];
  };

  export type AuthorityDataStruct = {
    IDs: PromiseOrValue<BigNumberish>[];
    accounts: PromiseOrValue<string>[];
    versions: PromiseOrValue<BigNumberish>[];
  };

  export type AuthorityDataStructOutput = [BigNumber[], string[], BigNumber[]] & {
    IDs: BigNumber[];
    accounts: string[];
    versions: BigNumber[];
  };
}

export interface PolynomialAccountResolverInterface extends utils.Interface {
  functions: {
    'getAccount(uint64)': FunctionFragment;
    'getAccountAuthorities(address)': FunctionFragment;
    'getAccountAuthoritiesTypes(address)': FunctionFragment;
    'getAccountDetails(address)': FunctionFragment;
    'getAccountIdDetails(uint256)': FunctionFragment;
    'getAccountVersions(address[])': FunctionFragment;
    'getAuthorityAccounts(address)': FunctionFragment;
    'getAuthorityDetails(address)': FunctionFragment;
    'getAuthorityIDs(address)': FunctionFragment;
    'getAuthorityTypes(address[])': FunctionFragment;
    'getContractCode(address)': FunctionFragment;
    'getID(address)': FunctionFragment;
    'getIDAuthorities(uint256)': FunctionFragment;
    'gnosisFactoryContracts(uint256)': FunctionFragment;
    'index()': FunctionFragment;
    'isShield(address)': FunctionFragment;
    'list()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'getAccount'
      | 'getAccountAuthorities'
      | 'getAccountAuthoritiesTypes'
      | 'getAccountDetails'
      | 'getAccountIdDetails'
      | 'getAccountVersions'
      | 'getAuthorityAccounts'
      | 'getAuthorityDetails'
      | 'getAuthorityIDs'
      | 'getAuthorityTypes'
      | 'getContractCode'
      | 'getID'
      | 'getIDAuthorities'
      | 'gnosisFactoryContracts'
      | 'index'
      | 'isShield'
      | 'list',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'getAccount', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getAccountAuthorities', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAccountAuthoritiesTypes', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAccountDetails', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAccountIdDetails', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getAccountVersions', values: [PromiseOrValue<string>[]]): string;
  encodeFunctionData(functionFragment: 'getAuthorityAccounts', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAuthorityDetails', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAuthorityIDs', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAuthorityTypes', values: [PromiseOrValue<string>[]]): string;
  encodeFunctionData(functionFragment: 'getContractCode', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getID', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getIDAuthorities', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'gnosisFactoryContracts', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'index', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isShield', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'list', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'getAccount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccountAuthorities', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccountAuthoritiesTypes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccountDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccountIdDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccountVersions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAuthorityAccounts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAuthorityDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAuthorityIDs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAuthorityTypes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getContractCode', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getID', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getIDAuthorities', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'gnosisFactoryContracts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'index', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isShield', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'list', data: BytesLike): Result;

  events: {};
}

export interface PolynomialAccountResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PolynomialAccountResolverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAccount(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & { account: string }>;

    getAccountAuthorities(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;

    getAccountAuthoritiesTypes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[AccountResolver.AuthTypeStructOutput[]]>;

    getAccountDetails(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[AccountResolver.AccountDataStructOutput]>;

    getAccountIdDetails(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[AccountResolver.AccountDataStructOutput]>;

    getAccountVersions(accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getAuthorityAccounts(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;

    getAuthorityDetails(
      authority: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[AccountResolver.AuthorityDataStructOutput]>;

    getAuthorityIDs(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getAuthorityTypes(
      authorities: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[AccountResolver.AuthTypeStructOutput[]]>;

    getContractCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string] & { o_code: string }>;

    getID(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & { id: BigNumber }>;

    getIDAuthorities(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string[]]>;

    gnosisFactoryContracts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    index(overrides?: CallOverrides): Promise<[string]>;

    isShield(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & { shield: boolean }>;

    list(overrides?: CallOverrides): Promise<[string]>;
  };

  getAccount(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  getAccountAuthorities(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

  getAccountAuthoritiesTypes(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<AccountResolver.AuthTypeStructOutput[]>;

  getAccountDetails(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<AccountResolver.AccountDataStructOutput>;

  getAccountIdDetails(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<AccountResolver.AccountDataStructOutput>;

  getAccountVersions(accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;

  getAuthorityAccounts(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

  getAuthorityDetails(
    authority: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<AccountResolver.AuthorityDataStructOutput>;

  getAuthorityIDs(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

  getAuthorityTypes(
    authorities: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<AccountResolver.AuthTypeStructOutput[]>;

  getContractCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  getID(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  getIDAuthorities(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;

  gnosisFactoryContracts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  index(overrides?: CallOverrides): Promise<string>;

  isShield(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  list(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getAccount(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    getAccountAuthorities(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

    getAccountAuthoritiesTypes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<AccountResolver.AuthTypeStructOutput[]>;

    getAccountDetails(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<AccountResolver.AccountDataStructOutput>;

    getAccountIdDetails(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<AccountResolver.AccountDataStructOutput>;

    getAccountVersions(accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber[]>;

    getAuthorityAccounts(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

    getAuthorityDetails(
      authority: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<AccountResolver.AuthorityDataStructOutput>;

    getAuthorityIDs(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

    getAuthorityTypes(
      authorities: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<AccountResolver.AuthTypeStructOutput[]>;

    getContractCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    getID(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getIDAuthorities(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string[]>;

    gnosisFactoryContracts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    index(overrides?: CallOverrides): Promise<string>;

    isShield(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    list(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getAccount(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getAccountAuthorities(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAccountAuthoritiesTypes(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAccountDetails(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAccountIdDetails(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    getAccountVersions(accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;

    getAuthorityAccounts(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAuthorityDetails(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAuthorityIDs(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAuthorityTypes(authorities: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;

    getContractCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getID(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getIDAuthorities(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    gnosisFactoryContracts(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    index(overrides?: CallOverrides): Promise<BigNumber>;

    isShield(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    list(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAccount(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountAuthorities(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountAuthoritiesTypes(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getAccountDetails(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountIdDetails(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountVersions(accounts: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAuthorityAccounts(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAuthorityDetails(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAuthorityIDs(authority: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAuthorityTypes(authorities: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getContractCode(_addr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getID(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIDAuthorities(id: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gnosisFactoryContracts(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    index(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isShield(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    list(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
