/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace SoulBoundNFTProxyRegistry {
  export type ContractInfoStruct = {
    name: string;
    symbol: string;
    organization: string;
    owner: string;
  };

  export type ContractInfoStructOutput = [string, string, string, string] & {
    name: string;
    symbol: string;
    organization: string;
    owner: string;
  };
}

export interface SoulBoundNFTProxyRegistryInterface extends utils.Interface {
  contractName: 'SoulBoundNFTProxyRegistry';
  functions: {
    'beaconAddress()': FunctionFragment;
    'getContractInfoByProxyAddress(address)': FunctionFragment;
    'getProxiesByOwnerAddress(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'proxies(uint256)': FunctionFragment;
    'proxyCount()': FunctionFragment;
    'proxyFactory()': FunctionFragment;
    'registerBeaconProxy(address,string,string,string,address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'setBeaconAddress(address)': FunctionFragment;
    'setProxyFactory(address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'beaconAddress', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getContractInfoByProxyAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'getProxiesByOwnerAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxies', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'proxyCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxyFactory', values?: undefined): string;
  encodeFunctionData(functionFragment: 'registerBeaconProxy', values: [string, string, string, string, string]): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setBeaconAddress', values: [string]): string;
  encodeFunctionData(functionFragment: 'setProxyFactory', values: [string]): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;

  decodeFunctionResult(functionFragment: 'beaconAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getContractInfoByProxyAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getProxiesByOwnerAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxyCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxyFactory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'registerBeaconProxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setBeaconAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setProxyFactory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface SoulBoundNFTProxyRegistry extends BaseContract {
  contractName: 'SoulBoundNFTProxyRegistry';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SoulBoundNFTProxyRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
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
    beaconAddress(overrides?: CallOverrides): Promise<[string]>;

    getContractInfoByProxyAddress(
      _proxy: string,
      overrides?: CallOverrides
    ): Promise<[SoulBoundNFTProxyRegistry.ContractInfoStructOutput]>;

    getProxiesByOwnerAddress(_owner: string, overrides?: CallOverrides): Promise<[string[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxies(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    proxyCount(overrides?: CallOverrides): Promise<[BigNumber] & { _value: BigNumber }>;

    proxyFactory(overrides?: CallOverrides): Promise<[string]>;

    registerBeaconProxy(
      proxyAddress: string,
      name: string,
      symbol: string,
      organization: string,
      tokenOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    setBeaconAddress(
      _beaconAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProxyFactory(
      _factory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  beaconAddress(overrides?: CallOverrides): Promise<string>;

  getContractInfoByProxyAddress(
    _proxy: string,
    overrides?: CallOverrides
  ): Promise<SoulBoundNFTProxyRegistry.ContractInfoStructOutput>;

  getProxiesByOwnerAddress(_owner: string, overrides?: CallOverrides): Promise<string[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  proxyCount(overrides?: CallOverrides): Promise<BigNumber>;

  proxyFactory(overrides?: CallOverrides): Promise<string>;

  registerBeaconProxy(
    proxyAddress: string,
    name: string,
    symbol: string,
    organization: string,
    tokenOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  setBeaconAddress(
    _beaconAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProxyFactory(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    beaconAddress(overrides?: CallOverrides): Promise<string>;

    getContractInfoByProxyAddress(
      _proxy: string,
      overrides?: CallOverrides
    ): Promise<SoulBoundNFTProxyRegistry.ContractInfoStructOutput>;

    getProxiesByOwnerAddress(_owner: string, overrides?: CallOverrides): Promise<string[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    proxyCount(overrides?: CallOverrides): Promise<BigNumber>;

    proxyFactory(overrides?: CallOverrides): Promise<string>;

    registerBeaconProxy(
      proxyAddress: string,
      name: string,
      symbol: string,
      organization: string,
      tokenOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBeaconAddress(_beaconAddress: string, overrides?: CallOverrides): Promise<void>;

    setProxyFactory(_factory: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    beaconAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getContractInfoByProxyAddress(_proxy: string, overrides?: CallOverrides): Promise<BigNumber>;

    getProxiesByOwnerAddress(_owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxies(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    proxyCount(overrides?: CallOverrides): Promise<BigNumber>;

    proxyFactory(overrides?: CallOverrides): Promise<BigNumber>;

    registerBeaconProxy(
      proxyAddress: string,
      name: string,
      symbol: string,
      organization: string,
      tokenOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setBeaconAddress(
      _beaconAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProxyFactory(_factory: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    beaconAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getContractInfoByProxyAddress(_proxy: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProxiesByOwnerAddress(_owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxies(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerBeaconProxy(
      proxyAddress: string,
      name: string,
      symbol: string,
      organization: string,
      tokenOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    setBeaconAddress(
      _beaconAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProxyFactory(
      _factory: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}