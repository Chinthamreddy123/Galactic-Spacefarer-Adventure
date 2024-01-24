namespace MyProject;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Spacefarers : cuid, managed {
    name               : String
                                     @Common.Label: 'Spacefarer Name';
    stardustCollection : String
                                     @Common.Label: 'Stardust Collection';
    Navskill           : String
                                     @Common.Label: 'Wormhole Navigation Skill';
    originPlanet       : String
                                     @Common.Label: 'Origin Planet';
    spacesuitColor     : String
                                     @Common.Label: 'Spacesuit Color';
    Email              : String(100) @Common.Label: 'Email Address';
    department         : Association to Departments;
    position           : Association to Positions;
}

entity Departments : cuid {
    name        : String(100);
    description : String(100);
}

entity Positions : cuid {
    name : String(100);
}
