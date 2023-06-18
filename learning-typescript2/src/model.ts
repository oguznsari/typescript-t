let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: number = 425;

enum InventoryItemType {
    Computer = "computer",
    Furniture = "furniture"
}

interface InventoryItem {
    displayName: string;
    inventoryType: InventoryItemType;
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;

    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: 'M1 MacBook Pro 14"',
    inventoryType: InventoryItemType.Computer,
    trackingNumber: "MBPM1123456",
    createDate: new Date()
});

