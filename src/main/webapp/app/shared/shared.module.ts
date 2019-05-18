import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterSampleApplicationSharedLibsModule, JhipsterSampleApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterSampleApplicationSharedLibsModule, JhipsterSampleApplicationSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterSampleApplicationSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterSampleApplicationSharedModule
    };
  }
}
