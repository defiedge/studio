/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface VelodromeV2PoolFactoryInterface extends utils.Interface {
  functions: {
    'MAX_FEE()': FunctionFragment;
    'ZERO_FEE_INDICATOR()': FunctionFragment;
    'allPools(uint256)': FunctionFragment;
    'allPoolsLength()': FunctionFragment;
    'createPair(address,address,bool)': FunctionFragment;
    'createPool(address,address,bool)': FunctionFragment;
    'createPool(address,address,uint24)': FunctionFragment;
    'customFee(address)': FunctionFragment;
    'feeManager()': FunctionFragment;
    'getFee(address,bool)': FunctionFragment;
    'getPair(address,address,bool)': FunctionFragment;
    'getPool(address,address,uint24)': FunctionFragment;
    'getPool(address,address,bool)': FunctionFragment;
    'implementation()': FunctionFragment;
    'isPair(address)': FunctionFragment;
    'isPaused()': FunctionFragment;
    'isPool(address)': FunctionFragment;
    'pauser()': FunctionFragment;
    'setCustomFee(address,uint256)': FunctionFragment;
    'setFee(bool,uint256)': FunctionFragment;
    'setFeeManager(address)': FunctionFragment;
    'setPauseState(bool)': FunctionFragment;
    'setPauser(address)': FunctionFragment;
    'setSinkConverter(address,address,address)': FunctionFragment;
    'setVoter(address)': FunctionFragment;
    'sinkConverter()': FunctionFragment;
    'stableFee()': FunctionFragment;
    'velo()': FunctionFragment;
    'veloV2()': FunctionFragment;
    'volatileFee()': FunctionFragment;
    'voter()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MAX_FEE'
      | 'ZERO_FEE_INDICATOR'
      | 'allPools'
      | 'allPoolsLength'
      | 'createPair'
      | 'createPool(address,address,bool)'
      | 'createPool(address,address,uint24)'
      | 'customFee'
      | 'feeManager'
      | 'getFee'
      | 'getPair'
      | 'getPool(address,address,uint24)'
      | 'getPool(address,address,bool)'
      | 'implementation'
      | 'isPair'
      | 'isPaused'
      | 'isPool'
      | 'pauser'
      | 'setCustomFee'
      | 'setFee'
      | 'setFeeManager'
      | 'setPauseState'
      | 'setPauser'
      | 'setSinkConverter'
      | 'setVoter'
      | 'sinkConverter'
      | 'stableFee'
      | 'velo'
      | 'veloV2'
      | 'volatileFee'
      | 'voter',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MAX_FEE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ZERO_FEE_INDICATOR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allPools', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'allPoolsLength', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'createPair',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'createPool(address,address,bool)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'createPool(address,address,uint24)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'customFee', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'feeManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getFee', values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
  encodeFunctionData(
    functionFragment: 'getPair',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPool(address,address,uint24)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPool(address,address,bool)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'implementation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isPair', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'isPaused', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isPool', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'pauser', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setCustomFee',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'setFee',
    values: [PromiseOrValue<boolean>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'setFeeManager', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'setPauseState', values: [PromiseOrValue<boolean>]): string;
  encodeFunctionData(functionFragment: 'setPauser', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'setSinkConverter',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'setVoter', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'sinkConverter', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stableFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'velo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'veloV2', values?: undefined): string;
  encodeFunctionData(functionFragment: 'volatileFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'voter', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'MAX_FEE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ZERO_FEE_INDICATOR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allPools', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allPoolsLength', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createPool(address,address,bool)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createPool(address,address,uint24)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'customFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feeManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPool(address,address,uint24)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPool(address,address,bool)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'implementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isPair', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isPaused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isPool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pauser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setCustomFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeeManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPauseState', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setPauser', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSinkConverter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setVoter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sinkConverter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stableFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'velo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'veloV2', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'volatileFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'voter', data: BytesLike): Result;

  events: {
    'PoolCreated(address,address,bool,address,uint256)': EventFragment;
    'SetCustomFee(address,uint256)': EventFragment;
    'SetFeeManager(address)': EventFragment;
    'SetPauseState(bool)': EventFragment;
    'SetPauser(address)': EventFragment;
    'SetVoter(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'PoolCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetCustomFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetFeeManager'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetPauseState'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetPauser'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SetVoter'): EventFragment;
}

export interface PoolCreatedEventObject {
  token0: string;
  token1: string;
  stable: boolean;
  pool: string;
  arg4: BigNumber;
}
export type PoolCreatedEvent = TypedEvent<[string, string, boolean, string, BigNumber], PoolCreatedEventObject>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export interface SetCustomFeeEventObject {
  pool: string;
  fee: BigNumber;
}
export type SetCustomFeeEvent = TypedEvent<[string, BigNumber], SetCustomFeeEventObject>;

export type SetCustomFeeEventFilter = TypedEventFilter<SetCustomFeeEvent>;

export interface SetFeeManagerEventObject {
  feeManager: string;
}
export type SetFeeManagerEvent = TypedEvent<[string], SetFeeManagerEventObject>;

export type SetFeeManagerEventFilter = TypedEventFilter<SetFeeManagerEvent>;

export interface SetPauseStateEventObject {
  state: boolean;
}
export type SetPauseStateEvent = TypedEvent<[boolean], SetPauseStateEventObject>;

export type SetPauseStateEventFilter = TypedEventFilter<SetPauseStateEvent>;

export interface SetPauserEventObject {
  pauser: string;
}
export type SetPauserEvent = TypedEvent<[string], SetPauserEventObject>;

export type SetPauserEventFilter = TypedEventFilter<SetPauserEvent>;

export interface SetVoterEventObject {
  voter: string;
}
export type SetVoterEvent = TypedEvent<[string], SetVoterEventObject>;

export type SetVoterEventFilter = TypedEventFilter<SetVoterEvent>;

export interface VelodromeV2PoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VelodromeV2PoolFactoryInterface;

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
    MAX_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    ZERO_FEE_INDICATOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    allPoolsLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'createPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'createPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    customFee(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    feeManager(overrides?: CallOverrides): Promise<[string]>;

    getFee(
      pool: PromiseOrValue<string>,
      _stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    'getPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    'getPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    isPair(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    isPaused(overrides?: CallOverrides): Promise<[boolean]>;

    isPool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

    pauser(overrides?: CallOverrides): Promise<[string]>;

    setCustomFee(
      pool: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setFee(
      _stable: PromiseOrValue<boolean>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setFeeManager(
      _feeManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setPauseState(
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setPauser(
      _pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setSinkConverter(
      _sinkConverter: PromiseOrValue<string>,
      _velo: PromiseOrValue<string>,
      _veloV2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    sinkConverter(overrides?: CallOverrides): Promise<[string]>;

    stableFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    velo(overrides?: CallOverrides): Promise<[string]>;

    veloV2(overrides?: CallOverrides): Promise<[string]>;

    volatileFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    voter(overrides?: CallOverrides): Promise<[string]>;
  };

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  ZERO_FEE_INDICATOR(overrides?: CallOverrides): Promise<BigNumber>;

  allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

  createPair(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    stable: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'createPool(address,address,bool)'(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    stable: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'createPool(address,address,uint24)'(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  customFee(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  feeManager(overrides?: CallOverrides): Promise<string>;

  getFee(pool: PromiseOrValue<string>, _stable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;

  getPair(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    stable: PromiseOrValue<boolean>,
    overrides?: CallOverrides,
  ): Promise<string>;

  'getPool(address,address,uint24)'(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  'getPool(address,address,bool)'(
    tokenA: PromiseOrValue<string>,
    tokenB: PromiseOrValue<string>,
    stable: PromiseOrValue<boolean>,
    overrides?: CallOverrides,
  ): Promise<string>;

  implementation(overrides?: CallOverrides): Promise<string>;

  isPair(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  isPaused(overrides?: CallOverrides): Promise<boolean>;

  isPool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

  pauser(overrides?: CallOverrides): Promise<string>;

  setCustomFee(
    pool: PromiseOrValue<string>,
    fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setFee(
    _stable: PromiseOrValue<boolean>,
    _fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setFeeManager(
    _feeManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setPauseState(
    _state: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setPauser(
    _pauser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setSinkConverter(
    _sinkConverter: PromiseOrValue<string>,
    _velo: PromiseOrValue<string>,
    _veloV2: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  setVoter(
    _voter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  sinkConverter(overrides?: CallOverrides): Promise<string>;

  stableFee(overrides?: CallOverrides): Promise<BigNumber>;

  velo(overrides?: CallOverrides): Promise<string>;

  veloV2(overrides?: CallOverrides): Promise<string>;

  volatileFee(overrides?: CallOverrides): Promise<BigNumber>;

  voter(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_FEE_INDICATOR(overrides?: CallOverrides): Promise<BigNumber>;

    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<string>;

    'createPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<string>;

    'createPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    customFee(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    feeManager(overrides?: CallOverrides): Promise<string>;

    getFee(
      pool: PromiseOrValue<string>,
      _stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<string>;

    'getPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    'getPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    isPair(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    isPaused(overrides?: CallOverrides): Promise<boolean>;

    isPool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    pauser(overrides?: CallOverrides): Promise<string>;

    setCustomFee(
      pool: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setFee(
      _stable: PromiseOrValue<boolean>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setFeeManager(_feeManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setPauseState(_state: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;

    setPauser(_pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setSinkConverter(
      _sinkConverter: PromiseOrValue<string>,
      _velo: PromiseOrValue<string>,
      _veloV2: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    setVoter(_voter: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    sinkConverter(overrides?: CallOverrides): Promise<string>;

    stableFee(overrides?: CallOverrides): Promise<BigNumber>;

    velo(overrides?: CallOverrides): Promise<string>;

    veloV2(overrides?: CallOverrides): Promise<string>;

    volatileFee(overrides?: CallOverrides): Promise<BigNumber>;

    voter(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'PoolCreated(address,address,bool,address,uint256)'(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      stable?: PromiseOrValue<boolean> | null,
      pool?: null,
      arg4?: null,
    ): PoolCreatedEventFilter;
    PoolCreated(
      token0?: PromiseOrValue<string> | null,
      token1?: PromiseOrValue<string> | null,
      stable?: PromiseOrValue<boolean> | null,
      pool?: null,
      arg4?: null,
    ): PoolCreatedEventFilter;

    'SetCustomFee(address,uint256)'(pool?: PromiseOrValue<string> | null, fee?: null): SetCustomFeeEventFilter;
    SetCustomFee(pool?: PromiseOrValue<string> | null, fee?: null): SetCustomFeeEventFilter;

    'SetFeeManager(address)'(feeManager?: null): SetFeeManagerEventFilter;
    SetFeeManager(feeManager?: null): SetFeeManagerEventFilter;

    'SetPauseState(bool)'(state?: null): SetPauseStateEventFilter;
    SetPauseState(state?: null): SetPauseStateEventFilter;

    'SetPauser(address)'(pauser?: null): SetPauserEventFilter;
    SetPauser(pauser?: null): SetPauserEventFilter;

    'SetVoter(address)'(voter?: null): SetVoterEventFilter;
    SetVoter(voter?: null): SetVoterEventFilter;
  };

  estimateGas: {
    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_FEE_INDICATOR(overrides?: CallOverrides): Promise<BigNumber>;

    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    allPoolsLength(overrides?: CallOverrides): Promise<BigNumber>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'createPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'createPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    customFee(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    feeManager(overrides?: CallOverrides): Promise<BigNumber>;

    getFee(
      pool: PromiseOrValue<string>,
      _stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'getPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    isPair(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    isPaused(overrides?: CallOverrides): Promise<BigNumber>;

    isPool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    pauser(overrides?: CallOverrides): Promise<BigNumber>;

    setCustomFee(
      pool: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setFee(
      _stable: PromiseOrValue<boolean>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setFeeManager(
      _feeManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setPauseState(
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setPauser(
      _pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setSinkConverter(
      _sinkConverter: PromiseOrValue<string>,
      _velo: PromiseOrValue<string>,
      _veloV2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    sinkConverter(overrides?: CallOverrides): Promise<BigNumber>;

    stableFee(overrides?: CallOverrides): Promise<BigNumber>;

    velo(overrides?: CallOverrides): Promise<BigNumber>;

    veloV2(overrides?: CallOverrides): Promise<BigNumber>;

    volatileFee(overrides?: CallOverrides): Promise<BigNumber>;

    voter(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_FEE_INDICATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPools(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPoolsLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'createPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'createPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    customFee(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFee(
      pool: PromiseOrValue<string>,
      _stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPair(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getPool(address,address,uint24)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'getPool(address,address,bool)'(
      tokenA: PromiseOrValue<string>,
      tokenB: PromiseOrValue<string>,
      stable: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPair(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPool(pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pauser(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCustomFee(
      pool: PromiseOrValue<string>,
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setFee(
      _stable: PromiseOrValue<boolean>,
      _fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setFeeManager(
      _feeManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setPauseState(
      _state: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setPauser(
      _pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setSinkConverter(
      _sinkConverter: PromiseOrValue<string>,
      _velo: PromiseOrValue<string>,
      _veloV2: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    setVoter(
      _voter: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    sinkConverter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stableFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    velo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    veloV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    volatileFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    voter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
