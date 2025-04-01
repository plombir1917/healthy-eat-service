-- AlterTable
CREATE SEQUENCE doctor_id_seq;
ALTER TABLE "doctor" ALTER COLUMN "id" SET DEFAULT nextval('doctor_id_seq');
ALTER SEQUENCE doctor_id_seq OWNED BY "doctor"."id";

-- AlterTable
CREATE SEQUENCE patient_id_seq;
ALTER TABLE "patient" ALTER COLUMN "id" SET DEFAULT nextval('patient_id_seq');
ALTER SEQUENCE patient_id_seq OWNED BY "patient"."id";
