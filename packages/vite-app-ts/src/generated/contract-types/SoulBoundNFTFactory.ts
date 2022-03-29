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

export interface SoulBoundNFTFactoryInterface extends utils.Interface {
  contractName: 'SoulBoundNFTFactory';
  functions: {
    'newBeaconProxy(string,string,string,string,bool,bool,uint256,address)': FunctionFragment;
    'newUpgradeableBeacon(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'proxyRegistry()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'newBeaconProxy',
    values: [string, string, string, string, boolean, boolean, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: 'newUpgradeableBeacon', values: [string]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxyRegistry', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;

  decodeFunctionResult(functionFragment: 'newBeaconProxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'newUpgradeableBeacon', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxyRegistry', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'BeaconProxyCreated(address,address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'UpgradeableBeaconCreated(address,address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BeaconProxyCreated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'UpgradeableBeaconCreated'): EventFragment;
}

export type BeaconProxyCreatedEvent = TypedEvent<[string, string], { beacon: string; beaconProxy: string }>;

export type BeaconProxyCreatedEventFilter = TypedEventFilter<BeaconProxyCreatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<[string, string], { previousOwner: string; newOwner: string }>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export type UpgradeableBeaconCreatedEvent = TypedEvent<
  [string, string, string],
  { createdBy: string; beacon: string; initialImplementation: string }
>;

export type UpgradeableBeaconCreatedEventFilter = TypedEventFilter<UpgradeableBeaconCreatedEvent>;

export interface SoulBoundNFTFactory extends BaseContract {
  contractName: 'SoulBoundNFTFactory';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SoulBoundNFTFactoryInterface;

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
    newBeaconProxy(
      name: string,
      symbol: string,
      organization: string,
      defaultRole: string,
      transferable: boolean,
      mintable: boolean,
      mintPrice: BigNumberish,
      tokenOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    newUpgradeableBeacon(
      initialImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxyRegistry(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  newBeaconProxy(
    name: string,
    symbol: string,
    organization: string,
    defaultRole: string,
    transferable: boolean,
    mintable: boolean,
    mintPrice: BigNumberish,
    tokenOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  newUpgradeableBeacon(
    initialImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxyRegistry(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    newBeaconProxy(
      name: string,
      symbol: string,
      organization: string,
      defaultRole: string,
      transferable: boolean,
      mintable: boolean,
      mintPrice: BigNumberish,
      tokenOwner: string,
      overrides?: CallOverrides
    ): Promise<string>;

    newUpgradeableBeacon(initialImplementation: string, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxyRegistry(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'BeaconProxyCreated(address,address)'(beacon?: string | null, beaconProxy?: null): BeaconProxyCreatedEventFilter;
    BeaconProxyCreated(beacon?: string | null, beaconProxy?: null): BeaconProxyCreatedEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;

    'UpgradeableBeaconCreated(address,address,address)'(
      createdBy?: string | null,
      beacon?: null,
      initialImplementation?: null
    ): UpgradeableBeaconCreatedEventFilter;
    UpgradeableBeaconCreated(
      createdBy?: string | null,
      beacon?: null,
      initialImplementation?: null
    ): UpgradeableBeaconCreatedEventFilter;
  };

  estimateGas: {
    newBeaconProxy(
      name: string,
      symbol: string,
      organization: string,
      defaultRole: string,
      transferable: boolean,
      mintable: boolean,
      mintPrice: BigNumberish,
      tokenOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    newUpgradeableBeacon(
      initialImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxyRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    newBeaconProxy(
      name: string,
      symbol: string,
      organization: string,
      defaultRole: string,
      transferable: boolean,
      mintable: boolean,
      mintPrice: BigNumberish,
      tokenOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    newUpgradeableBeacon(
      initialImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxyRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides & { from?: string | Promise<string> }): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
