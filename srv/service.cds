using { MyProject as my } from '../db/schema';

@path : '/service/MyProject'

service MyProjectService
{

@OData.Paging
@odata.draft.enabled
  entity Spacefarers @(restrict: [
    { grant: ['READ','WRITE'], to: 'admin' },
  ])
  
  as projection on my.Spacefarers;
  
}
