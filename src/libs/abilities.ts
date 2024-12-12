import { Ability, AbilityBuilder } from '@casl/ability';

import { ACTIONS } from '@/enums/actions.enum';
import { ENTITIES } from '@/enums/entities.enum';
import { IUserCreated } from '@/interfaces/user.interface';
import { ROLE } from '@/enums/role.enum';

// Define habilidades según el rol del usuario
export function defineAbilitiesFor(user: IUserCreated) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === ROLE.ADMIN || user.role === ROLE.SUPERADMIN) {
    can('manage', 'all');
  } else if (user.role === ROLE.RECEPTIONIST) {
    can(ACTIONS.CREATE, ENTITIES.USER);
    can(ACTIONS.READ, ENTITIES.USER);
    can(ACTIONS.UPDATE, ENTITIES.USER);
    can(ACTIONS.DELETE, ENTITIES.USER);

    can(ACTIONS.CREATE, ENTITIES.PATIENT);
    can(ACTIONS.READ, ENTITIES.PATIENT);
    can(ACTIONS.UPDATE, ENTITIES.PATIENT);
    can(ACTIONS.DELETE, ENTITIES.PATIENT);

    can(ACTIONS.CREATE, ENTITIES.SPECIALTY);
    can(ACTIONS.READ, ENTITIES.SPECIALTY);
    can(ACTIONS.UPDATE, ENTITIES.SPECIALTY);
    can(ACTIONS.DELETE, ENTITIES.SPECIALTY);

    can(ACTIONS.CREATE, ENTITIES.APPOINTMENT);
    can(ACTIONS.READ, ENTITIES.APPOINTMENT);
    can(ACTIONS.UPDATE, ENTITIES.APPOINTMENT);
    can(ACTIONS.DELETE, ENTITIES.APPOINTMENT);

  } else if (user.role === ROLE.DOCTOR) {
    can(ACTIONS.CREATE, ENTITIES.USER);
    can(ACTIONS.READ, ENTITIES.USER);
    can(ACTIONS.UPDATE, ENTITIES.USER);
    can(ACTIONS.DELETE, ENTITIES.USER);

    cannot(ACTIONS.READ_ALL, ENTITIES.USER);
    cannot(ACTIONS.UPDATE_ALL, ENTITIES.USER);
    cannot(ACTIONS.DELETE_ALL, ENTITIES.USER);

    cannot(ACTIONS.CREATE, ENTITIES.PATIENT);
    cannot(ACTIONS.READ, ENTITIES.PATIENT);
    cannot(ACTIONS.UPDATE, ENTITIES.PATIENT);
    cannot(ACTIONS.DELETE, ENTITIES.PATIENT);
    cannot(ACTIONS.READ_ALL, ENTITIES.PATIENT);
    cannot(ACTIONS.UPDATE_ALL, ENTITIES.PATIENT);
    cannot(ACTIONS.DELETE_ALL, ENTITIES.PATIENT);

    cannot(ACTIONS.CREATE, ENTITIES.SPECIALTY);
    cannot(ACTIONS.READ, ENTITIES.SPECIALTY);
    cannot(ACTIONS.UPDATE, ENTITIES.SPECIALTY);
    cannot(ACTIONS.DELETE, ENTITIES.SPECIALTY);
    cannot(ACTIONS.READ_ALL, ENTITIES.SPECIALTY);
    cannot(ACTIONS.UPDATE_ALL, ENTITIES.SPECIALTY);
    cannot(ACTIONS.DELETE_ALL, ENTITIES.SPECIALTY);
    
    can(ACTIONS.READ, ENTITIES.APPOINTMENT);
    
    cannot(ACTIONS.CREATE, ENTITIES.APPOINTMENT);
    cannot(ACTIONS.UPDATE, ENTITIES.APPOINTMENT);
    cannot(ACTIONS.DELETE, ENTITIES.APPOINTMENT);
    cannot(ACTIONS.READ_ALL, ENTITIES.APPOINTMENT);
    cannot(ACTIONS.UPDATE_ALL, ENTITIES.APPOINTMENT);
    cannot(ACTIONS.DELETE_ALL, ENTITIES.APPOINTMENT);
  }

  return build();
}
