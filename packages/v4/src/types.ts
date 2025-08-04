type UUIDString = `${string}-${string}-${string}-${string}-${string}`;
type UUID<T extends Uint8Array> = UUIDString | T;

export type { UUIDString, UUID };
